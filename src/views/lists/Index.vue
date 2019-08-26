<script>
export default {
  name: 'PageIndexList',
  fetch ({ redirect }) {
    redirect(301, '/lists/ingredients')
  }
}
</script>
