import React from "react";
import RedeemItem from "./RedeemItem";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
  useDisclosure,
} from "@chakra-ui/react";

const addRewardButtonStyle =
  "ml-auto font-semibold bg-gray-300 p-2 rounded-lg hover:scale-110 transition duration-500 ease-in-out transform hover:cursor-pointer";

function Rewards() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const [name, setName] = React.useState("");
  const [cost, setCost] = React.useState("");
  const [img, setImg] = React.useState("");

  const handleNameChange = (event) => setName(event.target.value);
  const handleCostChange = (event) => setCost(event.target.value);
  const handleImgChange = (event) => setImg(event.target.value);

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(name, cost, img);

    // enter code here
    setImg("");
    setName("");
    setCost("");
    onClose();
  };

  return (
    <>
      <div className="bg-white shadow-lg p-4 w-[55em]">
        <div className="flex">
          <div className="font-bold text-lg">Uploaded Rewards:</div>
          <div className={addRewardButtonStyle} onClick={onOpen}>
            Add Reward
          </div>
          <Modal
            initialFocusRef={initialRef}
            finalFocusRef={finalRef}
            isOpen={isOpen}
            onClose={onClose}
          >
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Add Rewards</ModalHeader>
              <ModalCloseButton />
              <ModalBody pb={6}>
                <FormControl>
                  <FormLabel>Img</FormLabel>
                  <Input id="image" value={img} onChange={handleImgChange} />
                </FormControl>
                <FormControl mt={4}>
                  <FormLabel>Name</FormLabel>
                  <Input id="name" value={name} onChange={handleNameChange} />
                </FormControl>
                <FormControl mt={4}>
                  <FormLabel>Cost</FormLabel>
                  <Input id="cost" value={cost} onChange={handleCostChange} />
                </FormControl>
              </ModalBody>

              <ModalFooter>
                <Button
                  colorScheme="blue"
                  mr={3}
                  onClick={(e) => {
                    submitHandler(e);
                  }}
                >
                  Save
                </Button>
                <Button onClick={onClose}>Cancel</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </div>
        <div className="pt-2 flex flex-wrap justify-evenly ">
          {/* image of product */}
          <RedeemItem
            img="https://d1o7uku192uawx.cloudfront.net/mobile/media/catalog/product/3/1/312x200_flipkart.png"
            name="Flipkart Coupon"
            cost="50"
          />
          <RedeemItem
            img="https://cdn.grabon.in/gograbon/images/merchant/1611817594553.jpg"
            name="Zomato Coupon"
            cost="50"
          />
          <RedeemItem
            img="https://cdn.grabon.in/gograbon/images/merchant/1610000375685.png"
            name="Swiggy Coupon"
            cost="50"
          />
          <RedeemItem
            img="https://www.goindigo.in/content/dam/indigov2/6e-website/campaigns/sale/Landing-page-banner-mobile.jpg"
            name="Indigo Coupon"
            cost="50"
          />
          <RedeemItem
            img="https://d1o7uku192uawx.cloudfront.net/mobile/media/catalog/product/3/1/312x200_flipkart.png"
            name="Flipkart Coupon"
            cost="50"
          />
          <RedeemItem
            img="https://cdn.grabon.in/gograbon/images/merchant/1611817594553.jpg"
            name="Zomato Coupon"
            cost="50"
          />
          <RedeemItem
            img="https://cdn.grabon.in/gograbon/images/merchant/1610000375685.png"
            name="Swiggy Coupon"
            cost="50"
          />
          <RedeemItem
            img="https://www.goindigo.in/content/dam/indigov2/6e-website/campaigns/sale/Landing-page-banner-mobile.jpg"
            name="Indigo Coupon"
            cost="50"
          />
        </div>
      </div>
    </>
  );
}

export default Rewards;
