export type PortfolioCategory = "all" | "clients" | "personal";

export type PortfolioItem = {
  id: number;
  image: string;
  title: string;
  description: string;
  category: PortfolioCategory;
  liveUrl?: string;
  githubUrl?: string;
};
