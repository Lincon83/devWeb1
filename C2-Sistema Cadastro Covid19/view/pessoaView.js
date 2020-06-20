document.querySelector('.form').addEventListener('submit', function (event) {
    event.preventDefault();

})

function deletaPessoa() {
    let url = new URL(window.location.href);
    let id = url.searchParams.get("id");
    document.querySelector("tr#tr"+id).remove(); 
    url.searchParams.delete('id');
    window.history.pushState({}, document.title, url);
    removePessoas(id)
}