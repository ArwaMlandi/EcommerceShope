import axios from 'axios';

export async function productsData() {
  try {
    const response = await axios.get("https://fakestoreapiserver.reactbd.com/products");
    const prouduct = response.data;
    return prouduct;
  } catch (error) {
    // Handle error
    console.error(error);
    throw error;
  }
}

// Usage example
async function fetchData() {
  try {
    const data = await productsData();
    console.log(data);
  } catch (error) {
    // Handle error
    console.error(error);
  }
}

fetchData();