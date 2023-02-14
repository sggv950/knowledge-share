function getFilesToOpen(filesStr: string): string {
  if (filesStr.split(',').length > 1) {
    const files = filesStr.split(',');
    return `file=${files.join('&file=')}`;
  }
    return `file=${filesStr}`;

}

export default function StackBlitz(props: {
  name: string;
  height?: number;
  view?: "preview" | "editor",
  openFile?: string;
  hideExplorer?: boolean;
  showDevtools?: boolean;
}) {

  const filesToOpen = getFilesToOpen(props.openFile);

  return (
    <iframe
      src={`https://stackblitz.com/edit/${props.name}?embed=1&hideExplorer=${props.hideExplorer ? 1 : 0}&${filesToOpen}&view=${props.view}&devToolsHeight=${props.showDevtools ? "50" : "0"}`}
      height={props.height || 600}
      style={{ width: "100%" }}
    />
  )
}
