import React, { useState, useEffect } from "react";
import "./code.css";
import Editor from "../../Editor/Editor";
import UseLocalStorage from "../../hooks/UseLocalStorage";
import FullscreenIcon from "@material-ui/icons/Fullscreen";
import { makeStyles } from "@material-ui/core";
import FullscreenExitIcon from "@material-ui/icons/FullscreenExit";

const useStyles = makeStyles(() => ({
  halfPane: {
    //display: "flex",
    height: "50vh",
    position: "relative",
  },

  fullPane: {
    // display: "flex",
    height: "100vh",
  },
  codeWriter: {
    display: "none",
  },
  fullIcon: {
    zIndex: 1000,
    position: "absolute",
    right:0
  },
}));

export default function Code() {
  const classes = useStyles();
  const [html, setHtml] = UseLocalStorage("html", "");
  const [css, setCss] = UseLocalStorage("css", "");
  const [js, setJs] = UseLocalStorage("js", "");
  const [srcDoc, setSrcDoc] = useState("");
  const [fullScreen, setFullScreen] = useState(false);


  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
      <html>
      <body>${html}</body>
      <style>${css}</style>
      <script>${js}</script>
    
      </html>
      `);
    }, 850);
    return () => clearTimeout(timeout);
  }, [html, css, js]);

  return (
    <>
      <div className={fullScreen ? classes.codeWriter : null}>
        <div className="pane top-pane">
          <Editor
            language="xml"
            displayName="HTML"
            value={html}
            onChange={setHtml}
          />
          <Editor
            language="css"
            displayName="CSS"
            value={css}
            onChange={setCss}
          />
          <Editor
            language="javascript"
            displayName="JS"
            value={js}
            onChange={setJs}
          />
        </div>
      </div>
      <div className={fullScreen ? classes.fullPane : classes.halfPane}>
        <div className={classes.fullIcon}>
          {fullScreen ? (
            <FullscreenExitIcon onClick={() => setFullScreen(false)} />
          ) : (
            <FullscreenIcon onClick={() => setFullScreen(true)} />
          )}
        </div>
        <iframe
          srcDoc={srcDoc}
          title="output"
          sandbox="allow-scripts"
          frameBorder="0"
          width="100%"
          height="100%"
        ></iframe>
      </div>
    </>
  );
}
