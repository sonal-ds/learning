// locator.tsx

import * as React from "react";
import "../index.css";
import {
  GetHeadConfig,
  GetPath,
  Template,
  TemplateProps,
  TemplateRenderProps,
} from "@yext/pages";
import PageLayout from "../components/PageLayout";
import {
  provideHeadless,
  SandboxEndpoints,
  SearchHeadless,
  SearchHeadlessProvider,
} from "@yext/search-headless-react";
import { FilterSearch } from "@yext/search-ui-react";
import StoreLocator from "../components/StoreLocator";
import { search_api } from "../constant";

export const getPath: GetPath<TemplateProps> = () => {
  return `locator`;
};  

export const getHeadConfig: GetHeadConfig<TemplateRenderProps> = () => {
  return {
    title: "Turtlehead Tacos Locations",
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1",
  };
};

const searcher = provideHeadless({
  apiKey: search_api,
  // make sure your experience key matches what you see in the platform
  experienceKey: "independent-financial",
  locale: "en",
  endpoints: SandboxEndpoints,
  verticalKey: "atms",
});


const Locator: Template<TemplateRenderProps> = () => {
  return (
    <PageLayout>
    <SearchHeadlessProvider searcher={searcher}>
      <div className="mx-auto max-w-7xl px-4">
        <StoreLocator /> 
      </div>
    </SearchHeadlessProvider>
  </PageLayout>

  );
};

export default Locator;