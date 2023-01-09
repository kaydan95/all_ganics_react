import { initializeApp } from "firebase/app";
import { v4 as uuid } from "uuid";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { getDatabase, ref, set, get, remove } from "firebase/database";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();
const database = new getDatabase();

export function login() {
  signInWithPopup(auth, provider).catch(console.error);
}

export function logout() {
  signOut(auth).catch(console.error);
}

export function onUserStateChange(callback) {
  onAuthStateChanged(auth, async (user) => {
    const updateUser = user ? await adminUser(user) : null;
    callback(updateUser);
  });
}

async function adminUser(user) {
  return get(ref(database, "admins")).then((snapshot) => {
    if (snapshot.exists()) {
      const admins = snapshot.val();
      const isAdmin = admins.includes(user.uid);
      return { ...user, isAdmin };
    }
    return user;
  });
}

export async function addNewProduct(product, imgUrl) {
  const id = uuid();
  return set(ref(database, `products/${id}`), {
    ...product,
    id,
    price: parseInt(product.price),
    image: imgUrl,
    categoryName: product.categoryName,
    categoryCode: parseInt(product.categoryCode),
    brandName: product.brandName,
    brandCode: parseInt(product.brandCode),
  });
}

export async function getProducts() {
  return get(ref(database, "products")).then((snapshot) => {
    if (snapshot.exists()) {
      return Object.values(snapshot.val());
    }
    return [];
  });
}

export async function getBrandList() {
  return get(ref(database, "products")).then((snapshot) => {
    if (snapshot.exists()) {
      const brandList = Object.values(snapshot.val()).map((product) => {
        return {
          id: product.id,
          title: product.brandName,
          brandId: product.brandCode,
        };
      });

      const list = brandList.filter((brand, idx, arr) => {
        return arr.findIndex((item) => item.title === brand.title) === idx;
      });

      return list;
    }
    return [];
  });
}

export async function getProductsByCategory(categoryId) {
  return get(ref(database, "products")).then((snapshot) => {
    if (snapshot.exists()) {
      const list = Object.values(snapshot.val()).map((product) => {
        return {
          ...product,
          CateCode: parseInt(String(product.categoryCode).slice(0, 5)),
        };
      });

      const productList = list.filter((item) => {
        return item.CateCode === categoryId;
      });

      return productList;
    }

    return [];
  });
}

export async function getProductsByBrand(brandId) {
  return get(ref(database, "products")).then((snapshot) => {
    if (snapshot.exists()) {
      const list = Object.values(snapshot.val()).filter((item) => {
        return item.brandCode === brandId;
      });

      return list;
    }

    return [];
  });
}

// Cart
export async function getCart(userId) {
  return get(ref(database, `carts/${userId}`)).then((snapshot) => {
    const items = snapshot.val() || {};
    return Object.values(items);
  });
}

export async function addOrUpdateCart(userId, product) {
  return set(ref(database, `carts/${userId}/${product.id}`), product);
}

export async function removeFromCart(userId, productId) {
  return remove(ref(database, `carts/${userId}/${productId}`));
}
