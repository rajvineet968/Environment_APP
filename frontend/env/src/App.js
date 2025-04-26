// import React, { useState } from 'react';
// import './App.css';

// function App() {
//   const [issues, setIssues] = useState([
//     {
//       id: 1,
//       title: 'Pothole near Park',
//       description: 'Large pothole causing traffic issues.',
//       location: '5th Street',
//       priority: 'High',
//       status: 'Open',
//       upvotes: 12,
//       image: 'https://cdn.shopify.com/s/files/1/0274/7288/7913/files/MicrosoftTeams-image_32.jpg?v=1705315718'
//     },
//     {
//       id: 2,
//       title: 'Broken Streetlight',
//       description: 'Streetlight not working properly.',
//       location: 'Main Avenue',
//       priority: 'Medium',
//       status: 'In-progress',
//       upvotes: 7,
//       image: 'https://media.istockphoto.com/id/496026170/photo/broken-street-lamp.jpg?s=1024x1024&w=is&k=20&c=mnRMAYFkiFnwKoIu3ff35sUn92YdMy4tG8WPEQHUbSA='
//     }
//   ]);

//   const [formData, setFormData] = useState({
//     title: '',
//     description: '',
//     location: '',
//     priority: 'Low',
//     image:null,
//   });

//   const handleChange = (e) => {
//     setFormData({...formData, [e.target.name]: e.target.value});
//   };

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const imageUrl = URL.createObjectURL(file);
//       setFormData(prev => ({ ...prev, image: imageUrl }));
//     }
//   };
  
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const newIssue = {
//       id: issues.length + 1,
//       ...formData,
//       status: 'Open',
//       upvotes: 0,
//       image: formData.image || 'https://via.placeholder.com/300x200?text=New+Issue'
//     };
//     setIssues([newIssue, ...issues]);
//     setFormData({ title: '', description: '', location: '', priority: 'Low' , image: null });
//   };

//   const handleUpvote = (id) => {
//     const updatedIssues = issues.map(issue => 
//       issue.id === id ? {...issue, upvotes: issue.upvotes + 1} : issue
//     );
//     setIssues(updatedIssues);
//   };

//   return (
//     <div className="App">
//       <header>
//         <h1>🌿 GreenWatch</h1>
//         <p>Report and track environmental issues in your locality.</p>
//       </header>

//       <main>
//         <section className="form-section">
//           <h2>Report an Issue</h2>
//           <form onSubmit={handleSubmit}>
//             <input
//               type="text"
//               name="title"
//               placeholder="Issue Title"
//               value={formData.title}
//               onChange={handleChange}
//               required
//             />
//             <textarea
//               name="description"
//               placeholder="Detailed Description"
//               value={formData.description}
//               onChange={handleChange}
//               required
//             ></textarea>
//             <input
//               type="text"
//               name="location"
//               placeholder="Location"
//               value={formData.location}
//               onChange={handleChange}
//               required
//             />
//             <select name="priority" value={formData.priority} onChange={handleChange} required>
//               <option value="Low">Low Priority</option>
//               <option value="Medium">Medium Priority</option>
//               <option value="High">High Priority</option>
//             </select>
//             <button type="submit">Submit Issue</button>
//           </form>
//         </section>

//         <section className="issues-section">
//           <h2>Reported Issues</h2>
//           <div className="issues-grid">
//             {issues.map(issue => (
//               <div className="issue-card" key={issue.id}>
//                 <img src={issue.image} alt={issue.title} />
//                 <h3>{issue.title}</h3>
//                 <p>{issue.description}</p>
//                 <p><strong>Location:</strong> {issue.location}</p>
//                 <p><strong>Priority:</strong> {issue.priority}</p>
//                 <p><strong>Status:</strong> {issue.status}</p>
//                 <button onClick={() => handleUpvote(issue.id)}>⬆️ Upvote ({issue.upvotes})</button>
//               </div>
//             ))}
//           </div>
//         </section>
//       </main>

//       <footer>
//         <p>© 2025 GreenWatch Initiative</p>
//       </footer>
//     </div>
//   );
// }

// export default App;


import React, { useState } from 'react';
import './App.css';

function App() {
  const [issues, setIssues] = useState([
    {
      id: 1,
      title: 'Pothole near Park',
      description: 'Large pothole causing traffic issues.',
      location: '5th Street',
      priority: 'High',
      status: 'Open',
      upvotes: 12,
      image: 'https://cdn.shopify.com/s/files/1/0274/7288/7913/files/MicrosoftTeams-image_32.jpg?v=1705315718'
    },
    {
      id: 2,
      title: 'Broken Streetlight',
      description: 'Streetlight not working properly.',
      location: 'Main Avenue',
      priority: 'Medium',
      status: 'In-progress',
      upvotes: 7,
      image: 'https://media.istockphoto.com/id/496026170/photo/broken-street-lamp.jpg?s=1024x1024&w=is&k=20&c=mnRMAYFkiFnwKoIu3ff35sUn92YdMy4tG8WPEQHUbSA='
    }
  ]);

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    location: '',
    priority: 'Low',
    image: null,
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setFormData(prev => ({ ...prev, image: imageUrl }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newIssue = {
      id: issues.length + 1,
      ...formData,
      status: 'Open',
      upvotes: 0,
      image: formData.image || 'https://via.placeholder.com/300x200?text=New+Issue'
    };
    setIssues([newIssue, ...issues]);
    setFormData({ title: '', description: '', location: '', priority: 'Low', image: null });
  };

  const handleUpvote = (id) => {
    const updatedIssues = issues.map(issue => 
      issue.id === id ? {...issue, upvotes: issue.upvotes + 1} : issue
    );
    setIssues(updatedIssues);
  };

  return (
    <div className="App">
      <header>
        <h1>🌿 GreenWatch</h1>
        <p>Report and track environmental issues in your locality.</p>
      </header>

      <main>
        <section className="form-section">
          <h2>Report an Issue</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="title"
              placeholder="Issue Title"
              value={formData.title}
              onChange={handleChange}
              required
            />
            <textarea
              name="description"
              placeholder="Detailed Description"
              value={formData.description}
              onChange={handleChange}
              required
            ></textarea>
            <input
              type="text"
              name="location"
              placeholder="Location"
              value={formData.location}
              onChange={handleChange}
              required
            />
            <select name="priority" value={formData.priority} onChange={handleChange} required>
              <option value="Low">Low Priority</option>
              <option value="Medium">Medium Priority</option>
              <option value="High">High Priority</option>
            </select>
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleImageChange}
            />
            <button type="submit">Submit Issue</button>
          </form>
        </section>

        <section className="issues-section">
          <h2>Reported Issues</h2>
          <div className="issues-grid">
            {issues.map(issue => (
              <div className="issue-card" key={issue.id}>
                <img src={issue.image} alt={issue.title} />
                <h3>{issue.title}</h3>
                <p>{issue.description}</p>
                <p><strong>Location:</strong> {issue.location}</p>
                <p><strong>Priority:</strong> {issue.priority}</p>
                <p><strong>Status:</strong> {issue.status}</p>
                <button onClick={() => handleUpvote(issue.id)}>⬆️ Upvote ({issue.upvotes})</button>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer>
        <p>© 2025 GreenWatch Initiative</p>
      </footer>
    </div>
  );
}

export default App;
