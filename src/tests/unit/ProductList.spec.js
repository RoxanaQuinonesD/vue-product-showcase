import { mount } from "@vue/test-utils"
import ProductList from "../../components/ProductList.vue"

describe("ProductList.vue", () => {
  it("muestra un mensaje de error cuando falla la carga de productos", () => {
    const wrapper = mount(ProductList, {
      global: {
        mocks: {
          $store: {
            getters: {
              "products/allProducts": []
            },
            state: {
              products: {
                loading: false,
                error: "No se pudieron cargar los productos."
              },
              filters: {
                selectedCategory: ""
              }
            },
            dispatch: jest.fn(),
            commit: jest.fn()
          }
        },
        stubs: {
          AppProductCard: true,
          "v-select": true
        }
      }
    })

    expect(wrapper.text()).toContain("No se pudieron cargar los productos.")
  })
})