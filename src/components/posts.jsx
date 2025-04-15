import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  useEffect(() => {
    const getPosts = async () => {
      const resp = await fetch('/api/posts');
      const postsResp = await resp.json();
      setPosts(postsResp);
    };

    getPosts();
  }, []);

  const handleSubmit = async () => {
        try {
              const response = await fetch('/api/chat', {
                      method: 'POST',
                              headers: {
                                        'Content-Type': 'application/json',
                                                },
                                                        body: JSON.stringify({ question: input }),
                                                              });

                                                                    const data = await response.json();
                                                                          setOutput(JSON.stringify(data, null, 2));
                                                                              } catch (error) {
                                                                                    setOutput('Error: ' + error.message);
                                                                                        }
                                                                                          };

  }

  return (
    <div>
      <h1>Posts</h1>
      {posts.map((post) => (
        <div key={post.id}>
          <h2>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
          </h2>
        </div>
      ))}
      <h1>Chat</h1>
      <div style={{ padding: '1rem', maxWidth: '500px', margin: '0 auto' }}>
            <input
                    type="text"
                            value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                            placeholder="Enter some text"
                                                    style={{ width: '100%', padding: '8px', marginBottom: '8px' }}
                                                          />
                                                                <button onClick={handleSubmit} style={{ padding: '8px 16px' }}>
                                                                        Send
                                                                              </button>
                                                                                    <textarea
                                                                                            readOnly
                                                                                                    value={output}
                                                                                                            rows={10}
                                                                                                                    style={{ width: '100%', marginTop: '16px', padding: '8px' }}
                                                                                                                          />
                                                                                                                              </div>

    </div>
  )
}

export default Posts;