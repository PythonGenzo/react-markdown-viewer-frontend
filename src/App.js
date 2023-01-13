import './App.css';
import ReactMarkdown from "react-markdown";
import { useEffect, useState } from 'react';





function App() {

  const [markdown, setMarkdown] = useState([]);

  useEffect(() => {
    fetch("Page1.md")
      .then((res) => res.text())
      .then((text) => setMarkdown(text));
  }, []);
 
  return (
    <div className="App">
      <main>
      <section className="markdown">
        <textarea
          className="input"
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
        ></textarea>
        <article className="result">
          <ReactMarkdown children={markdown}>
            {/* {markdown} */}
          </ReactMarkdown>
        </article>
      </section>
    </main>
    </div>
  );
}




export default App;
