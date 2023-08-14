// atoms
export interface ListTitleProps {
  title: string;
}
export interface SvgProps {
  slug: string;
}
// atoms
// molecules
export interface ButtonCategoryProps {
  id: number;
  name: string;
  slug: string;
  register: Object;
}
export interface ButtonFixedProps {
  callback: Function;
}
export interface ListContentProps {
  date: boolean;
  finance: any;
  callback: Function;
}
// molecules
// organisms
export interface FormProps {
  finance?: any;
  callback: Function;
}
export interface ListProps {
  callback: Function;
}
export interface MainMenuProps {
  callback: Function;
}
// organisms

export interface Finance {
  id: number;
  item_name: string | null;
  amount: string;
  date: string;
  memo: string | null;
  formatDate: string;
  income_flg: boolean;
  category_id: number;
  category_name: string;
  slug: string;
}
