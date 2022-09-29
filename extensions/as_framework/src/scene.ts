// NOTE: only escapes a " if it's not already escaped
function escapeDoubleQuotes(str: string) {
  return str.replace(/\\([\s\S])|(")/g, `"$1$2`);
}
export const methods = {
  generateCSVText() {
    //@ts-expect-error
    const rootNodes = cc.director.getScene()?.children;
    //@ts-expect-error
    const labels = rootNodes?.reduce<any[]>((acc, node) => {
      acc.push(...node.getComponentsInChildren("TranslatedLabel"));
      acc.push(...node.getComponentsInChildren("TranslatedOptionButton"));
      return acc;
    }, []);
    let text = "key,US\n";

    if (labels)
      //@ts-expect-error
      labels.forEach((label) => {
        if (!label.key) label.key = label.node.uuid;
        text += `${label.key},"${escapeDoubleQuotes(label.string)}"\n`;
      });

    return text;
  },

  getFontData(sceneUrl: string) {
    //@ts-expect-error
    const rootNodes = cc.director.getScene()?.children;
    // const rootNodes = cc.director.getScene()?.children;
    let fontKits;
    let hasLatex = false;
    for (const root of rootNodes) {
      const fontManager = root.getComponentInChildren("FontManager");
      if (fontManager && fontKits == null) fontKits = fontManager.fontKits;
      hasLatex ||= root.getComponentInChildren("LatexRenderer") != null;
    }

    console.log("fontManager", { fontKits, hasLatex });
    return { fontKits, hasLatex };
  },
};
