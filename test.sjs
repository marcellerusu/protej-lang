async fn *f() {
  let a = await 10
  let response = yield http.get()
  for await let data of response {
    data::view()
  }
}