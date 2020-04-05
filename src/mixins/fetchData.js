export default {
  data() {
    return {
      loading: true,
      api: null
    };
  },
  methods: {
    fetchData(url) {
      this.loading = true;
      this.api = null;

      fetch(`http://localhost:3000${url}`)
        .then(res => res.json())
        .then(data => {
          setTimeout(() => {
            this.api = data;
            this.loading = false;
          }, 300);
        })
        .catch(error => console.error(`Ocorreu um erro ao buscar os dados: ${error}`));
    }
  }
}