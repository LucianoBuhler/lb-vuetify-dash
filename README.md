# 🧩 Vue 3 + Vuetify Dashboard Boilerplate

A modern and lightweight **Vue 3 dashboard starter** built with **Vuetify 3.10**, **Quill Editor**, and **Yarn**.  
This boilerplate is designed to help you **start projects faster**, with clean code, reusable components, and built-in form validation.

---

## 🚀 Features

- ⚡ **Vue 3 + Vite** – Fast, modern setup with hot module replacement  
- 🎨 **Vuetify 3.10** – Material Design components and responsive layout  
- 🖋️ **Quill Editor** – Rich text editing made simple  
- ✅ **Form Validation** – Custom composables for synchronous and async validation  
- 🔄 **Reusable Layouts** – Organized structure for pages, views, and composables  
- 🧱 **TypeScript Support** – Type-safe development with autocompletion  
- 🧰 **Yarn** – Consistent and efficient dependency management  

---

## 🏗️ Project Setup

```bash
# Clone this repository
git clone https://github.com/<your-username>/<your-repo>.git

cd <your-repo>

# Install dependencies
yarn install

# Start development server
yarn dev
````

---

## 🧠 Folder Structure

```
src/
├── assets/          # Static assets
├── components/      # Reusable Vue components
├── composables/     # Custom reusable logic (validation, state, etc.)
├── layouts/         # Page layouts for Nuxt-style routing
├── pages/           # Route-based pages
├── plugins/         # Vuetify and other plugin setup
├── styles/          # Global styles and variables
└── main.ts          # App entry point
```

---

## ✏️ Example Components

### Form Validation with Quill Editor

```vue
<template>
  <v-form v-model="valid" @submit.prevent="handleSubmit">
    <v-text-field v-model="form.title" label="Title" :rules="[rules.required]" />
    <quill-editor v-model:content="form.body" />
    <v-btn type="submit" color="primary">Submit</v-btn>
  </v-form>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { QuillEditor } from '@vueup/vue-quill'
import { useValidationRules } from '@/composables/useValidationRules'

const form = ref({ title: '', body: '' })
const { required } = useValidationRules()
const rules = { required }

const valid = ref(true)
function handleSubmit() {
  if (!valid.value) return
  console.log('Submitting form:', form.value)
}
</script>
```

---

## 🧩 Dependencies

| Package                                                | Version | Description                      |
| ------------------------------------------------------ | ------- | -------------------------------- |
| [Vue](https://vuejs.org/)                              | 3.x     | Progressive JavaScript framework |
| [Vuetify](https://vuetifyjs.com/)                      | 3.10.x  | Material Design UI library       |
| [@vueup/vue-quill](https://vueup.github.io/vue-quill/) | latest  | Rich text editor                 |
| [Vite](https://vitejs.dev/)                            | latest  | Next-generation frontend tooling |
| [Yarn](https://yarnpkg.com/)                           | latest  | Dependency management            |

---

## 🧑‍💻 Development

```bash
# Run development server
yarn dev

# Build for production
yarn build

# Preview production build
yarn preview
```

---

## 🪄 Roadmap

* [ ] Add authentication example
* [ ] Add admin dashboard layout
* [ ] Add dark mode toggle
* [ ] Add API integration example

---

## 📄 License

This project is licensed under the **MIT License**.
Feel free to use and adapt it for your own projects.

---

### 💬 Author

**Luciano Bühler**
Senior Fullstack Developer | Vue · Node.js · Python
[GitHub](https://github.com/LucianoBuhler) • [LinkedIn](https://linkedin.com/in/lucianobuhler)
