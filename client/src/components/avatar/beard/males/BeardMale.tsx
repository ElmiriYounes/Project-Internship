import { IColorHair } from "../../variablesAvatar/VariableAvatar";

interface IBeard {
  none: React.SVGProps<SVGGElement>;
  short: React.SVGProps<SVGGElement>;
  medium: React.SVGProps<SVGGElement>;
  large: React.SVGProps<SVGGElement>;
}

export const getBeardMale = (colorsHair: IColorHair): IBeard => ({
  none: <g></g>,
  short: (
    <g id="light-beard">
      <path
        fill={colorsHair.medium}
        d="M159.502 84.929c-6.017-4.532-9.666-9.305-8.91-15.36l9.907 12.368"
        transform="matrix(1.10408 0 0 1.13021 -143.855 -9.058)"
      ></path>
      <path
        fill={colorsHair.medium}
        d="M159.502 84.929c-6.017-4.532-9.666-9.305-8.91-15.36l9.907 12.368"
        transform="matrix(-1.20597 0 0 1.13021 253.177 -9.058)"
      ></path>
      <path
        fill={colorsHair.medium}
        fillRule="nonzero"
        d="M166.891 67.371c-4.148 0-7.488 3.284-7.488 7.365v8.614c0 4.08 3.34 7.364 7.488 7.364h16.065c4.148 0 7.488-3.284 7.488-7.364v-8.614c0-4.081-3.34-7.365-7.488-7.365h-1.571c.055.449-.113.915-.491 1.231l-.635.531c.377.347.657.795.778 1.308h2.18c2.319 0 4.186 1.836 4.186 4.117v3.705a4.05 4.05 0 01-.73 2.327v1.016c0 3.257-2.665 5.878-5.977 5.878h-11.545c-3.312 0-5.977-2.621-5.977-5.878V80.59a4.051 4.051 0 01-.731-2.327v-3.705c0-2.281 1.868-4.117 4.187-4.117h1.371a2.621 2.621 0 011.201-1.629l-.249-.21a1.379 1.379 0 01-.491-1.231h-1.571z"
        transform="matrix(1.00063 0 0 1 -128.039 0)"
      ></path>
      <path
        fill={colorsHair.light}
        fillRule="nonzero"
        d="M165.883 88.201h2.097c.734 0 1.328.1 1.328.223v1.103c0 .123-.594.223-1.328.223h-2.097c-.734 0-1.328-.1-1.328-.223v-1.103c0-.123.594-.223 1.328-.223zM181.909 88.201h2.097c.734 0 1.328.1 1.328.223v1.103c0 .123-.594.223-1.328.223h-2.097c-.734 0-1.328-.1-1.328-.223v-1.103c0-.123.594-.223 1.328-.223z"
        transform="matrix(.96779 0 0 1 -122.804 0)"
      ></path>
    </g>
  ),
  medium: (
    <g id="medium-beard">
      <path
        fill={colorsHair.medium}
        fillRule="nonzero"
        d="M167.181 67.342c-4.148 0-7.488 3.284-7.488 7.365v8.614c0 4.081 3.34 7.364 7.488 7.364h16.065c4.148 0 7.488-3.283 7.488-7.364v-8.614c0-4.081-3.34-7.365-7.488-7.365h-1.571a1.38 1.38 0 01-.491 1.231l-.635.531c.377.347.657.796.778 1.308h2.18c2.319 0 4.187 1.836 4.187 4.117v3.705c0 .865-.27 1.666-.731 2.327v1.016c0 3.257-2.665 5.878-5.977 5.878h-11.545c-3.312 0-5.977-2.621-5.977-5.878v-1.016a4.051 4.051 0 01-.731-2.327v-3.705c0-2.281 1.868-4.117 4.187-4.117h1.371a2.621 2.621 0 011.201-1.629l-.249-.21a1.38 1.38 0 01-.491-1.231h-1.571z"
        transform="matrix(1.00063 0 0 1 -128.251 0)"
      ></path>
      <path
        fill={colorsHair.medium}
        d="M199.48 68.265c2.758 2.055 2.327 7.33-.961 11.772-3.289 4.441-8.199 6.378-10.957 4.324 2.218-1.261 5.081-3.721 7.458-6.931s3.897-6.67 4.46-9.165zM150.746 68.091c-2.758 2.055-2.328 7.33.961 11.772 3.289 4.442 8.198 6.379 10.956 4.324-2.217-1.261-5.081-3.721-7.457-6.931-2.378-3.21-3.897-6.67-4.46-9.165z"
        transform="translate(-128.151)"
      ></path>
      <path
        fill={colorsHair.medium}
        d="M155.642 82.913c0 10.838 8.676 19.638 19.364 19.638 10.686 0 19.364-8.8 19.364-19.638-4.842 2.709-11.851 4.909-19.364 4.909s-14.524-2.2-19.364-4.909z"
        transform="translate(-128.151)"
      ></path>
      <path
        fill={colorsHair.light}
        fillRule="nonzero"
        d="M165.889 91.643h2.108c.739 0 1.336.399 1.336.891v4.404c0 .493-.597.891-1.336.891h-2.108c-.738 0-1.335-.398-1.335-.891v-4.404c0-.492.597-.891 1.335-.891zM181.221 91.614h2.109c.738 0 1.335.423 1.335.943v4.658c0 .521-.597.943-1.335.943h-2.109c-.738 0-1.335-.422-1.335-.943v-4.658c0-.52.597-.943 1.335-.943z"
        transform="translate(-128.151)"
      ></path>
    </g>
  ),
  large: (
    <g id="large">
      <path
        fill={colorsHair.medium}
        fillRule="nonzero"
        d="M167.181 67.342c-4.148 0-7.488 3.284-7.488 7.365v8.614c0 4.081 3.34 7.364 7.488 7.364h16.065c4.148 0 7.488-3.283 7.488-7.364v-8.614c0-4.081-3.34-7.365-7.488-7.365h-1.571a1.38 1.38 0 01-.491 1.231l-.635.531c.377.347.657.796.778 1.308h2.18c2.319 0 4.187 1.836 4.187 4.117v3.705c0 .865-.27 1.666-.731 2.327v1.016c0 3.257-2.665 5.878-5.977 5.878h-11.545c-3.312 0-5.977-2.621-5.977-5.878v-1.016a4.051 4.051 0 01-.731-2.327v-3.705c0-2.281 1.868-4.117 4.187-4.117h1.371a2.621 2.621 0 011.201-1.629l-.249-.21a1.38 1.38 0 01-.491-1.231h-1.571z"
        transform="translate(-128.151)"
      ></path>
      <path
        fill={colorsHair.medium}
        d="M199.48 68.265c2.758 2.055 2.327 7.33-.961 11.772-3.289 4.441-8.199 6.378-10.957 4.324 2.218-1.261 5.081-3.721 7.458-6.931s3.897-6.67 4.46-9.165zM150.746 68.091c-2.758 2.055-2.328 7.33.961 11.772 3.289 4.442 8.198 6.379 10.956 4.324-2.217-1.261-5.081-3.721-7.457-6.931-2.378-3.21-3.897-6.67-4.46-9.165z"
        transform="translate(-128.151)"
      ></path>
      <path
        fill={colorsHair.medium}
        d="M151.188 78.111c0 20.195 10.726 36.59 23.94 36.59 13.212 0 23.941-16.395 23.941-36.59-5.587 6.059-14.392 10.977-23.941 10.977-9.551 0-18.354-4.918-23.94-10.977z"
        transform="translate(-128.151)"
      ></path>
      <path
        fill={colorsHair.light}
        fillRule="nonzero"
        d="M166.87 96.417h2.109c.738 0 1.335.615 1.335 1.373v6.789c0 .759-.597 1.373-1.335 1.373h-2.109c-.738 0-1.335-.614-1.335-1.373V97.79c0-.758.597-1.373 1.335-1.373zM180.238 96.388h2.108c.738 0 1.335.615 1.335 1.373v6.788c0 .759-.597 1.373-1.335 1.373h-2.108c-.739 0-1.336-.614-1.336-1.373v-6.788c0-.758.597-1.373 1.336-1.373z"
        transform="translate(-128.151)"
      ></path>
    </g>
  ),
});
