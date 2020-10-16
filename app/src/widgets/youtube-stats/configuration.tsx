import React from "react";
import { useTranslation } from "react-i18next";

import { ConfigurationProps } from "widgets/index";
import Input from "components/forms/input";

const Configuration = ({
  options,
  setOptions,
  save,
}: ConfigurationProps<Props>) => {
  const { t } = useTranslation();
  return (
    <>
      <Input
        setValue={(value) => setOptions({ url: value })}
        value={options.url}
        label={t("widget.youtube-stats.configuration.url")}
        className="mb-6"
        type="text"
        onEnter={save}
      />
    </>
  );
};

export interface Props {
  url: string;
}

export default Configuration;
