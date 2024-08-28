//Style type --- Can be passed to sx prop in single brackets-- sx={styleObject}

import { CSSObject } from "@emotion/react";

export interface StyleSheet {
    [key: string]: CSSObject;
}