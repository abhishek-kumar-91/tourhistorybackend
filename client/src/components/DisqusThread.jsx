import React, { useEffect } from "react";
import PropTypes from "prop-types";

function renderDisqus() {
  if (window.DISQUS === undefined) {
    var script = document.createElement("script");
    script.async = true;
    script.src = `https://${import.meta.env.VITE_SHORTNAME}.disqus.com/embed.js`;
    document.getElementsByTagName("head")[0].appendChild(script);
  } else {
    window.DISQUS.reset({ reload: true });
  }
}

const DisqusThread = ({ id, title, path, ...other }) => {
  useEffect(() => {
    renderDisqus();
  }, [id, title, path]);

  if (import.meta.env.MODE === "development") {
    window.disqus_shortname = import.meta.env.VITE_SHORTNAME;
    window.disqus_identifier = id;
    window.disqus_title = title;
    window.disqus_url = import.meta.env.VITE_WEBSITE_URL + path;
  }

  return <div {...other} id="disqus_thread" />;
};

DisqusThread.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};

export default DisqusThread;
