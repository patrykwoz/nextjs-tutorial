export default function Page() {
  async function createInvoice(userId,formData) {
    'use server'

    const rawFormData = {
      customerId: formData.get('customerId'),
      amount: formData.get('amount'),
      status: formData.get('status'),
    };

    console.log(rawFormData);
    console.log('user id',userId);

    // mutate data
    // revalidate cache
  }

  const createInvoiceWithHello = createInvoice.bind(null, {userId: 'hello'});

  return (<>
    <form action={createInvoiceWithHello}>
      <input name="customerId" placeholder="Customer ID" />
      <input name="amount" placeholder="Amount" />
      <select name="status">
        <option value="draft">Draft</option>
        <option value="sent">Sent</option>
        <option value="paid">Paid</option>
      </select>
      <button type="submit">Create Invoice
      </button>

    </form>
  </>)


}