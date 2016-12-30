import { createModule } from 'redux-modules';

const module = createModule({
  name: 'appModule',
  initialState: { scrollPosition: 0 },
  transformations: {
    updateScrollPosition: (state, { payload }) =>
      ({ ...state, scrollPosition: payload }),
  },
});

export default module;
