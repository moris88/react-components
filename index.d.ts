declare module "essential-components";

declare namespace Components {
  export type If = (props: IfProps) => JSX.Element;
  export type IfElse = (props: IfElseProps) => JSX.Element;
  export type For = (props: ForProps) => JSX.Element;
  export type Test = (props: TestProps) => JSX.Element;

  export interface ForProps {
    list: any[];
    each: (el: any, key: number) => React.ReactNode;
  }

  export interface IfProps {
    condition: boolean;
    children: React.ReactNode;
  }

  export interface IfElseProps {
    condition: boolean;
    isFalse: React.ReactNode;
    children: React.ReactNode;
  }

  export interface TestProps {
    data: any;
  }
}
export default Components;
