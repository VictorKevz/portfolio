export type PortfolioCategory = "all" | "clients" | "personal";
type tools = string;
export type PortfolioItem = {
  id: number;
  image: string;
  title: string;
  description: string;
  category: PortfolioCategory;
  liveUrl?: string;
  githubUrl?: string;
  tools: [tools, tools, tools, tools];
};

export type PortfolioItemProps = {
  data: PortfolioItem;
};
