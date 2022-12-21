function Alert({country}) {
  return (
    <div class="bg-orange-100 text-sm md:text-base border-l-4 border-orange-500 text-orange-700 p-1 mb-2 flex flex-col md:flex-row" >
  <p class="font-bold">Hata ({country}) :</p>
  <p>Bu ülkenin bilgileri bulunmamaktadır. Dünya geneli sonuçlar gösterilmektedir.</p>
</div>
  )
}
export default Alert