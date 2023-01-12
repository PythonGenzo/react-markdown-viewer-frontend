import './App.css';
import ReactMarkdown from "react-markdown";
import { useEffect, useState } from 'react';
// import remarkGfm from 'remark-gfm';


const MarkDown = `
  # H1
  ## H2
  ### H3

 	
  **bold text**

  	
  *italicized text*

  
  > blockquote

  Ordered List	
  1. First item
  2. Second item
  3. Third item

  Unordered List	
  - First item
  - Second item
  - Third item
  
  
  	---

  Link	[title](https://www.example.com)

  Image	![alt text](image.jpg)

  | Syntax | Description |
| ----------- | ----------- |
| Header | Title |
| Paragraph | Text |


Here's a sentence with a footnote. [^1]

[^1]: This is the footnote.
    `
  

function App() {

  const [markdown, setMarkdown] = useState(MarkDown);

  useEffect(() => {
    fetch("Page1.md")
      .then((res) => res.text())
      .then((text) => setMarkdown(text));
  }, []);
 
  return (
    <div className="App">



      {/* <ReactMarkdown children={markdown}  /> */}
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
    {/* <PageComponent /> */}

    </div>
  );
}

const PageComponent = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch("Page1.md")
      .then((res) => res.text())
      .then((text) => setContent(text));
  }, []);

  return (
    <div className="post">
      <ReactMarkdown children={content} />
    </div>
  );
};


export default App;
