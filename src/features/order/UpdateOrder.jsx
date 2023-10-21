import { useFetcher } from 'react-router-dom';
import Button from '../../ui/Button';
import { updateOrder } from '../../services/apiRestaurant';

function UpdateOrder({ order }) {
  const fetcher = useFetcher();

  return (
    <fetcher.Form method="patch" className="text-right">
      <Button type="primary">Make Priority</Button>
    </fetcher.Form>
  );
}
export default UpdateOrder;

export async function action({ request, params }) {
  const data = { priority: true };

  await updateOrder(params.orderId, data);
  return null;
}

// fetcher.form submits the form and re-validate the page

// Revalidation happens here after calling d action function: Because react router knows the data we updated "updateOrder()" has changed as a result of our action above ☝️, so when it happens it will automatically fetch the data in the background and re-render the page with the new data
