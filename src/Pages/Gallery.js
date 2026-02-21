import { useState } from "react";
import galleryData from "../Data/GalleryData";
import "./Gallery.css";

const Gallery = () => {
  const [items, setItems] = useState(galleryData);
  const [filter, setFilter] = useState("All");

  const categories = ["All", ...new Set(items.map(item => item.category))];

  const filteredImages =
    filter === "All"
      ? items
      : items.filter(item => item.category === filter);

  // DELETE IMAGE
  const handleDelete = (id) => {
    setItems(prev => prev.filter(item => item.id !== id));
  };

  // SIMPLE UPDATE (change title)
  const handleUpdate = (id) => {
    const newTitle = prompt("Enter new title");
    if (!newTitle) return;

    setItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, title: newTitle } : item
      )
    );
  };

  return (
    <main className="gallery-page">
      {/* Hero */}
      <section className="gallery-hero">
        <h1>School Gallery</h1>
        <p>A glimpse into life, learning, and excellence at Crestwood Academy</p>
      </section>

      {/* Filters */}
      <div className="gallery-filters">
        {categories.map((cat, index) => (
          <button
            key={index}
            className={filter === cat ? "active" : ""}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <section className="gallery-grid">
        {filteredImages.map(item => (
          <div key={item.id} className="gallery-card" data-aos="zoom-in">
            <div className="image-skeleton"></div>

            <img
              src={item.image}
              alt={item.title}
              loading="lazy"
              onLoad={(e) => {
                e.target.previousSibling.style.display = "none";
                e.target.classList.add("loaded");
              }}
            />

            <div className="overlay">
              <h3>{item.title}</h3>

              <div className="gallery-actions">
                <button
                  className="edit-btn"
                  onClick={() => handleUpdate(item.id)}
                >
                  Edit
                </button>

                <button
                  className="delete-btn"
                  onClick={() => handleDelete(item.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};

export default Gallery;

// import { useEffect, useState } from "react";
// import { supabase } from "../SupabaseClient";
// import "./Gallery.css";

// const Gallery = () => {
//   const [items, setItems] = useState([]);
//   const [filter, setFilter] = useState("All");

//   // Fetch images from Supabase
//   useEffect(() => {
//     fetchImages();
//   }, []);

//   const fetchImages = async () => {
//     const { data, error } = await supabase
//       .storage
//       .from("gallery")
//       .list("public", { limit: 100 });

//     if (error) {
//       console.error(error);
//       return;
//     }

//     const formatted = data.map((file, index) => ({
//       id: index,
//       name: file.name,
//       title: file.name.split(".")[0],
//       category: "Facilities", // you can improve this later
//       image: supabase.storage
//         .from("gallery")
//         .getPublicUrl(`public/${file.name}`).data.publicUrl
//     }));

//     setItems(formatted);
//   };

//   // FILTERS
//   const categories = ["All", ...new Set(items.map(item => item.category))];

//   const filteredImages =
//     filter === "All"
//       ? items
//       : items.filter(item => item.category === filter);

//   // DELETE IMAGE (Supabase)
//   const handleDelete = async (name) => {
//     const confirmDelete = window.confirm("Delete this image?");
//     if (!confirmDelete) return;

//     const { error } = await supabase
//       .storage
//       .from("gallery")
//       .remove([`public/${name}`]);

//     if (!error) {
//       setItems(prev => prev.filter(item => item.name !== name));
//     }
//   };

//   // UPDATE TITLE (frontend only for now)
//   const handleUpdate = (id) => {
//     const newTitle = prompt("Enter new title");
//     if (!newTitle) return;

//     setItems(prev =>
//       prev.map(item =>
//         item.id === id ? { ...item, title: newTitle } : item
//       )
//     );
//   };

//   return (
//     <main className="gallery-page">
//       {/* Hero */}
//       <section className="gallery-hero">
//         <h1>School Gallery</h1>
//         <p>A glimpse into life, learning, and excellence at Crestwood Academy</p>
//       </section>

//       {/* Filters */}
//       <div className="gallery-filters">
//         {categories.map((cat, index) => (
//           <button
//             key={index}
//             className={filter === cat ? "active" : ""}
//             onClick={() => setFilter(cat)}
//           >
//             {cat}
//           </button>
//         ))}
//       </div>

//       {/* Gallery Grid */}
//       <section className="gallery-grid">
//         {filteredImages.map(item => (
//           <div key={item.id} className="gallery-card" data-aos="zoom-in">
//             <img src={item.image} alt={item.title} loading="lazy" />

//             <div className="overlay">
//               <h3>{item.title}</h3>

//               <div className="gallery-actions">
//                 <button
//                   className="edit-btn"
//                   onClick={() => handleUpdate(item.id)}
//                 >
//                   Edit
//                 </button>

//                 <button
//                   className="delete-btn"
//                   onClick={() => handleDelete(item.name)}
//                 >
//                   Delete
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </section>
//     </main>
//   );
// };

// export default Gallery;
