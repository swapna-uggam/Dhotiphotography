'use client';

import { useState, useEffect } from 'react';
import { dbB } from '../Firebase/configB';
import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  doc
} from 'firebase/firestore';

const initialFormState = {
  title: '',
  description: '',
  story: '',
  price: '',
  duration: '',
  coverage: '',
  tag: '',
  color: '',
  textBgColor: '',
  textFontColor: '',
  borderColor: '',
  badge: '',
  badgeName: '',
  badgeTextColor: '',
  badgeBackgroundColor: '',
  badgeBorderColor: '',
  image: '',
  image1: '',
  image2: '',
  image3: '',
  galleryUrl: '',
  notes: '',
  extraDetails: '',
  features: '',
  gear: '',
  deliverables: '',
  alldeliverables: '',
  blogTitle: '',
  blogLink: '',
  blogImageUrl: ''
};

export default function DhotiPackageManager() {
  const [form, setForm] = useState(initialFormState);
  const [packages, setPackages] = useState([]);
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetchPackages();
  }, []);

  const fetchPackages = async () => {
    const snapshot = await getDocs(collection(dbB, 'dhotiPackages'));
    setPackages(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
  };

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const resetForm = () => {
    setForm(initialFormState);
    setEditingId(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      ...form,
      features: form.features.split('\n').filter(Boolean),
      gear: form.gear.split('\n').filter(Boolean),
      deliverables: form.deliverables.split('\n').filter(Boolean),
      alldeliverables: form.alldeliverables.split('\n').filter(Boolean),
      relatedBlogs: [
        {
          title: form.blogTitle,
          link: form.blogLink,
          imageUrl: form.blogImageUrl
        }
      ],
      createdAt: new Date()
    };

    if (editingId) {
      await updateDoc(doc(dbB, 'dhotiPackages', editingId), payload);
    } else {
      await addDoc(collection(dbB, 'dhotiPackages'), payload);
    }

    resetForm();
    fetchPackages();
  };

  const handleEdit = (pkg) => {
    setEditingId(pkg.id);
    setForm({
      ...pkg,
      features: pkg.features.join('\n'),
      gear: pkg.gear.join('\n'),
      deliverables: pkg.deliverables.join('\n'),
      alldeliverables: pkg.alldeliverables.join('\n'),
      blogTitle: pkg.relatedBlogs[0]?.title || '',
      blogLink: pkg.relatedBlogs[0]?.link || '',
      blogImageUrl: pkg.relatedBlogs[0]?.imageUrl || ''
    });
  };

  const handleDelete = async (id) => {
    if (!confirm('Delete this package?')) return;
    await deleteDoc(doc(dbB, 'dhotiPackages', id));
    fetchPackages();
  };

  const textFields = [
    'title', 'description', 'story', 'price', 'duration',
    'coverage', 'tag', 'color', 'textBgColor', 'textFontColor',
    'borderColor', 'badge', 'badgeName', 'badgeTextColor',
    'badgeBackgroundColor', 'badgeBorderColor', 'image', 'image1',
    'image2', 'image3', 'galleryUrl', 'notes', 'extraDetails'
  ];
  const multilineFields = ['features', 'gear', 'deliverables', 'alldeliverables'];

  return (
    <div className="max-w-7xl mx-auto p-6 mt-10 bg-gray-50 rounded-lg shadow">
      <h1 className="text-2xl font-bold mb-6 text-center text-indigo-600">
        {editingId ? '✏️ Edit Dhoti Package' : '📦 Add Dhoti Package'}
      </h1>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {textFields.map(name => (
          <input
            key={name}
            name={name}
            value={form[name]}
            onChange={handleChange}
            placeholder={name}
            className="border px-4 py-2 rounded focus:ring w-full text-sm"
          />
        ))}
        {multilineFields.map(name => (
          <textarea
            key={name}
            name={name}
            value={form[name]}
            onChange={handleChange}
            placeholder={`${name} (one per line)`}
            rows={3}
            className="border px-4 py-2 rounded focus:ring col-span-2 text-sm"
          />
        ))}

        <input
          name="blogTitle"
          value={form.blogTitle}
          onChange={handleChange}
          placeholder="blogTitle"
          className="border px-4 py-2 rounded w-full text-sm"
        />
        <input
          name="blogLink"
          value={form.blogLink}
          onChange={handleChange}
          placeholder="blogLink"
          className="border px-4 py-2 rounded w-full text-sm"
        />
        <input
          name="blogImageUrl"
          value={form.blogImageUrl}
          onChange={handleChange}
          placeholder="blogImageUrl"
          className="border px-4 py-2 rounded w-full text-sm"
        />

        <div className="md:col-span-2 flex justify-center gap-4 mt-4">
          <button type="submit" className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700">
            {editingId ? 'Update' : 'Submit'}
          </button>
          {editingId && (
            <button type="button" onClick={resetForm} className="bg-gray-300 px-6 py-2 rounded">
              Cancel
            </button>
          )}
        </div>
      </form>

      <div className="mt-12">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Saved Dhoti Packages</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {packages.map(pkg => (
            <div key={pkg.id} className="bg-white rounded-lg shadow border overflow-hidden">
              {pkg.image && <img src={pkg.image} alt={pkg.title} className="w-full h-48 object-cover" />}
              <div className="p-4 space-y-2">
                <h3 className="font-bold text-lg">{pkg.title}</h3>
                <p className="text-sm text-gray-500">Tag: {pkg.tag || '—'}</p>
                <p className="font-semibold">₹{pkg.price || '—'}</p>
                <p className="text-xs text-gray-600">Desc: {pkg.description || '—'}</p>
                <p className="text-xs text-gray-600">Story: {pkg.story || '—'}</p>

                <ul className="mt-2 list-disc ml-5 text-sm">
                  {(pkg.features || []).map((f, i) => <li key={i}>{f}</li>)}
                </ul>

                <div className="mt-2 flex gap-2 flex-wrap">
                  {[pkg.image1, pkg.image2, pkg.image3].filter(Boolean).map((u, i) => (
                    <img key={i} src={u} className="w-12 h-12 object-cover rounded" />
                  ))}
                </div>

                <div className="flex justify-between mt-4">
                  <button onClick={() => handleEdit(pkg)} className="px-3 py-1 bg-yellow-400 rounded">Edit</button>
                  <button onClick={() => handleDelete(pkg.id)} className="px-3 py-1 bg-red-500 text-white rounded">Delete</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
