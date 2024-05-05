import { Product } from "@commerce/types/product";
import { url } from "inspector";

export async function getHomePageProducts(): Promise<Product[]> {
  const p = [
    {
      id: '1',
      name: 'name_1',
      description: 'desc_1',
      descriptionHtml: '<h2>desc_1</h2>',
      sku: 'sku_1',
      slug: 'slug_1',
      path: 'path_1',
      images: [{
        url:'https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&w=600',
        width:600}
      ],
      variants: [
        { id: 'p_var1', name: 'product_var_1', price: {value: 1, }, options:[] },
      ],
      price: {
        value: 1,
      },
      options: [],
      vendor: 'משק 72',
    },
    {
      id: '2',
      name: 'name_2',
      description: 'desc_2',
      descriptionHtml: '<h2>desc_2</h2>',
      sku: 'sku_2',
      slug: 'slug_2',
      path: 'path_2',
      images: [{
        url:'https://images.pexels.com/photos/416160/pexels-photo-416160.jpeg?auto=compress&cs=tinysrgb&w=600',
        width:600}
    ],
      variants: [
        { id: 'p_var2', name: 'product_var_2', price: {value: 2, }, options:[] },
      ],
      price: {
        value: 2,
      },
      options: [],
      vendor: 'משק 72',
    },
    {
      id: '3',
      name: 'name_3',
      description: 'desc_3',
      descriptionHtml: '<h2>desc_3</h2>',
      sku: 'sku_3',
      slug: 'slug_3',
      path: 'path_3',
      images: [{
        url:'https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg?auto=compress&cs=tinysrgb&w=600'
      }],
      variants: [
        { id: 'p_var3', name: 'product_var_3', price: {value: 3, }, options:[] },
      ],
      price: {
        value: 3,
      },
      options: [],
      vendor: 'משק 72',
    },
    {
      id: '4',
      name: 'name_4',
      description: 'desc_4',
      descriptionHtml: '<h2>desc_4</h2>',
      sku: 'sku_4',
      slug: 'slug_4',
      path: 'path_4',
      images: [{
        url:'https://images.pexels.com/photos/57416/cat-sweet-kitty-animals-57416.jpeg?auto=compress&cs=tinysrgb&w=600'
      }],
      variants: [
        { id: 'p_var4', name: 'product_var_4', price: {value: 4, }, options:[] },
      ],
      price: {
        value: 4,
      },
      options: [],
      vendor: 'משק 72',
    },
    {
      id: '5',
      name: 'name_5',
      description: 'desc_5',
      descriptionHtml: '<h2>desc_5</h2>',
      sku: 'sku_5',
      slug: 'slug_5',
      path: 'path_5',
      images: [{
        url:'https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600'
      }],
      variants: [
        { id: 'p_var5', name: 'product_var_5', price: {value: 5, }, options:[] },
      ],
      price: {
        value: 5,
      },
      options: [],
      vendor: 'משק 72',
    },
    {
      id: '6',
      name: 'name_6',
      description: 'desc_6',
      descriptionHtml: '<h2>desc_6</h2>',
      sku: 'sku_6',
      slug: 'slug_6',
      path: 'path_6',
      images: [],
      variants: [
        { id: 'p_var6', name: 'product_var_6', price: {value: 6, }, options:[] },
      ],
      price: {
        value: 6,
      },
      options: [],
      vendor: 'משק 72',
    },
    {
      id: '7',
      name: 'name_7',
      description: 'desc_7',
      descriptionHtml: '<h2>desc_7</h2>',
      sku: 'sku_7',
      slug: 'slug_7',
      path: 'path_7',
      images: [],
      variants: [
        { id: 'p_var7', name: 'product_var_7', price: {value: 7, }, options:[] },
      ],
      price: {
        value: 7,
      },
      options: [],
      vendor: 'משק 72',
    },
    {
      id: '8',
      name: 'name_8',
      description: 'desc_8',
      descriptionHtml: '<h2>desc_8</h2>',
      sku: 'sku_8',
      slug: 'slug_8',
      path: 'path_8',
      images: [
        {
            url:'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=600',
       width:600,     
        }
      ],
      variants: [],
      price: {
        value: 8,
      },
      options: [],
      vendor: 'משק 72',
    },
    {
      id: '9',
      name: 'name_9',
      description: 'desc_9',
      descriptionHtml: '<h2>desc_9</h2>',
      sku: 'sku_9',
      slug: 'slug_9',
      path: 'path_9',
      images: [],
      variants: [],
      price: {
        value: 9,
        },
      options: [],
      vendor: 'משק 72',
    },
    {
      id: '10',
      name: 'name_10',
      description: 'desc_10',
      descriptionHtml: '<h2>desc_01</h2>',
      sku: 'sku_10',
      slug: 'slug_10',
      path: 'path_10',
      images: [],
      variants: [],
      price: {
        value: 10,
      },
      options: [],
      vendor: 'משק 72',
    },
  ] satisfies Product[];

  return Promise.resolve(p)
}
