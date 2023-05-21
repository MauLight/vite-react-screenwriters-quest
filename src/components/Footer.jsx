import { Button, Grid, Input, Text, Textarea, Table } from "@nextui-org/react";


export default function Footer() {
  return (
    <div className="columns-2 px-20">
      <Grid css={{ padding: "50px" }}>
        <div className="w-[100%]">
          <Text h1 size={35} color="black" css={{ fontFamily: "Josefin Sans" }}>SCREENWRITERS' QUEST</Text>
          <Text p size={25} color="black" css={{ fontFamily: "Raleway" }} >Your next feature starts here.</Text>
        </div>
        <div>
          <Table
            lined
            headerLined
            shadow={false}
            selectionMode="multiple"
            aria-label="Example static collection table"
            css={{
              height: "auto",

            }}
          >
            <Table.Header>
              <Table.Column>NAME</Table.Column>
              <Table.Column>ROLE</Table.Column>
              <Table.Column>STATUS</Table.Column>
            </Table.Header>
            <Table.Body>
              <Table.Row key="1">
                <Table.Cell>Tony Reichert</Table.Cell>
                <Table.Cell>CEO</Table.Cell>
                <Table.Cell>Active</Table.Cell>
              </Table.Row>
              <Table.Row key="2">
                <Table.Cell>Zoey Lang</Table.Cell>
                <Table.Cell>Technical Lead</Table.Cell>
                <Table.Cell>Paused</Table.Cell>
              </Table.Row>
              <Table.Row key="3">
                <Table.Cell>Jane Fisher</Table.Cell>
                <Table.Cell>Senior Developer</Table.Cell>
                <Table.Cell>Active</Table.Cell>
              </Table.Row>
              <Table.Row key="4">
                <Table.Cell>William Howard</Table.Cell>
                <Table.Cell>Community Manager</Table.Cell>
                <Table.Cell>Vacation</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </div>
      </Grid>
      <Grid css={{ padding: "50px" }}>
        <div className="w-[100%]">
          <Text h1 size={35} color="black" css={{ fontFamily: "Poppins" }}>Do you have questions?</Text>
          <Text p size={25} color="black" css={{ fontFamily: "Raleway" }} >Feel free to write us below, we'll contact you soon!</Text>
        </div>
        <div className="mt-10 flex justify-center gap-x-5">
          <div>
            <Input type="text" width="370px" labelPlaceholder="Name" bordered />
          </div>
          <div>
            <Input type="email" width="370px" labelPlaceholder="Email" rounded bordered />
          </div>
        </div>
        <div className="mt-10 flex justify-center gap-x-5">
          <Textarea fullWidth labelPlaceholder="Message" rounded bordered />
        </div>
        <div className="mt-10 flex justify-center gap-x-5">
          <button className="rounded-[50px] border-solid border-2 border-black px-8 py-3 hover:bg-black hover:text-white transition-all duration-500">
            <p className='font-tertiary text-xl'><b>Submit</b></p>
          </button>
        </div>
      </Grid>
    </div>
  )
}
