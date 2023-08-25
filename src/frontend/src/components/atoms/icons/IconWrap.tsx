interface Props {
  slug?: string;
  children: React.ReactNode;
}

export default function IconWrap({ slug = "", children }: Props) {
  return <div className={`mj-iconWrap ${slug}`}>{children}</div>;
}
