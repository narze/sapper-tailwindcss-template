<script>
	import Nav from '../components/Nav.svelte';
  import Tailwind from '../Tailwind.svelte';
  import GlobalCss from '../Global.css.svelte';
	export let segment;
</script>

<style>
	main {
		position: relative;
		max-width: 56em;
		background-color: white;
		padding: 2em;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>

<Tailwind />
<GlobalCss />
<Nav {segment}/>

<main>
	<slot></slot>
</main>
