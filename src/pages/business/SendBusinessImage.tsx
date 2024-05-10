import { Button, Card, Center, Input, Modal } from "@mantine/core";
import { Form, redirect } from "react-router-dom";
import { useBusiness } from "../../hooks/useUserBusiness";
import { getCookies } from "../../utils/cookie";
import baseApi from "../../api/baseApi";
import { useDisclosure } from "@mantine/hooks";
import { BusinessResponse } from "../../api/postBusiness";

export default function SendBusinessImage() {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <section className="max-w-[600px] mx-auto py-8">
      <Card shadow="sm" padding="lg" radius="md" withBorder>
        <Modal opened={opened} onClose={close} withCloseButton={false}>
          <Center maw={600} h={100} bg="var(--mantine-color-gray-light)">
            Send Image Form
          </Center>
          <Form method="POST" encType="multipart/form-data">
            <Input.Wrapper label="Image">
              <Input type="file" name="image" required />
            </Input.Wrapper>
            <Button onClick={close} className="my-4" type="submit" fullWidth>
              Submit
            </Button>
          </Form>
        </Modal>
        <Button onClick={open}>Add Image</Button>
      </Card>
    </section>
  );
}

export async function sendImageAction({ request }: { request: Request }) {
  const { currentBusinessId, currentBusiness } = useBusiness.getState();
  const formData = await request.formData();

  const headers = {
    "Content-Type": "multipart/form-data",
    Authorization: "Bearer " + getCookies(),
  };
  await baseApi
    .post(`/business/image/${currentBusinessId}`, formData, {
      headers: headers,
    })
    .then(() => {
      // console.log(d.data);

      return;
    });
  // return redirect(`/business/${currentBusinessId}`);
  return redirect(`/business/${currentBusiness.business_name}`);
}

export async function loadBusinessById() {
  const { currentBusinessId } = useBusiness.getState();

  const response = await baseApi
    .get<BusinessResponse>(`/business/${currentBusinessId}`, {
      headers: {
        Authorization: "Bearer " + getCookies(),
      },
    })
    .then((d) => {
      return d.data;
    });

  return response;
}
