import { RouterContext } from "next/dist/shared/lib/router-context";
import { Provider } from "react-redux";
import '../styles/globals.css';
import { setupStore, wrapper } from '../redux/store/store';

const store = setupStore();

export const decorators = [
  Story => (
    <Provider store={store}>
      <Story />
    </Provider>
  )
];

export default wrapper.withRedux(decorators);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  loaders: [
    async () => ({
      store: await import('../redux/store/store')
    })
  ],
  nextRouter: {
    Provider: RouterContext.Provider,
  },
}
