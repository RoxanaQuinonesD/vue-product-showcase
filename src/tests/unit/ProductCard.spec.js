import { mount } from "@vue/test-utils"
import ProductCard from "../../components/ProductCard.vue"

describe("ProductCard.vue", () => {
  it("renderiza correctamente la información del producto", () => {
    const product = {
      id: 1,
      title: "iPhone 9",
      category: "smartphones",
      price: 549,
      thumbnail: "https://dummyjson.com/image/i/products/1/thumbnail.jpg"
    }

    const wrapper = mount(ProductCard, {
      props: {
        product
      },
      global: {
        mocks: {
          $store: {
            state: {
              favorites: {
                favorites: []
              }
            },
            commit: jest.fn()
          }
        }
      }
    })

    expect(wrapper.text()).toContain("iPhone 9")
    expect(wrapper.text()).toContain("smartphones")
    expect(wrapper.text()).toContain("$549")
    expect(wrapper.find("img").attributes("src")).toBe(product.thumbnail)
  })
})