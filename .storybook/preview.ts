import type { Preview } from '@storybook/react'
import { allModes } from "../.storybook/modes";

const preview: Preview = {
  parameters: {
    chromatic: {
      modes: {
        "light mobile": allModes["light mobile"],
        "light desktop": allModes["light desktop"],
      },
    },
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
  },
};

export default preview;