let count = 0
function inc () {
count +=1;
}
<button on:click={inc}>
	Clicked {count}
	{count === 1 ? 'time' : 'times'}
</button>