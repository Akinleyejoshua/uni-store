import Head from "next/head"
import { useContext } from "react";
import { GlobalContext } from "../../../context/GlobalContext";
import { ButtonLoader } from "../../../components/ButtonLoader";
import { documentToBlob } from "../../../helpers/fileReader";
import { AdminHeader } from "../../../components/AdminHeader";
import { SideBar } from "../../../components/SideBar";

const AddProduct = () => {
    const { product: {
        handleState,
        msg,
        saveNewProduct,
        error,
        loading
    } } = useContext(GlobalContext);

    return <div className="add-product flex">
        <Head>
            <title>UNI-STORE | Add Product</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <SideBar />

        <div className="main-component">
            <AdminHeader />

            <main>
                <section className="flex col">
                    <h1>General</h1>
                    <div className="items-">
                        <div className="input-bar">
                            <small>Name</small>
                            <div className="input">
                                <input placeholder="Name" onChange={event => handleState("name", event.target.value)} />
                            </div>
                        </div>
                        <div className="input-bar">
                            <small>Description</small>
                            <div className="input">
                                <textarea placeholder="Description" onChange={event => handleState("description", event.target.value)} />
                            </div>
                        </div>
                        <div className="input-bar">
                            <small>Product type</small>
                            <div className="input">
                                <select onChange={event => handleState("type", event.target.value)}>
                                    <option></option>
                                    <option>Simple Product</option>
                                    <option>Grouped Product</option>
                                    <option>External/Affliate Product</option>
                                    <option>Variable Product</option>
                                </select>
                            </div>
                        </div>
                        <div className="space-2"></div>
                        <div className="flex">
                            <div className="flex">
                                <input type={"checkbox"} onChange={event => handleState("virtual", event.target.checked)} />
                                <div className="space-2"></div>
                                <small>Virtual</small>
                            </div>

                            <div className="space-2"></div>

                            <div className="flex">
                                <input type={"checkbox"} onChange={event => handleState("downloadable", event.target.checked)} />
                                <div className="space-2"></div>
                                <small>Downloadable</small>
                            </div>
                        </div>
                    </div>
                    <div className="space-2"></div>

                    <h1>Pricing</h1>
                    <div className="items-">
                        <div className="input-bar">
                            <small>Regular price</small>
                            <div className="input">
                                <input placeholder="Regular price ($)" type={"number"} onChange={event => handleState("regularPrice", event.target.value)} />
                            </div>
                        </div>
                        <div className="input-bar">
                            <small>Sale price</small>
                            <div className="input">
                                <input placeholder="Sale price ($)" type={"number"} onChange={event => handleState("salePrice", event.target.value)} />
                            </div>
                        </div>
                    </div>
                    <div className="space-2"></div>

                    <h1>Media</h1>
                    <div className="items-">
                        <div className="input-bar">
                            <small>Image</small>
                            <div className="input">
                                <input type={"file"} onChange={event => {
                                    documentToBlob(event.target.files[0], (blob) => {
                                        handleState("image", blob)
                                    })
                                }
                                } />
                            </div>
                        </div>
                        <div className="input-bar">
                            <small>Category</small>
                            <div className="input">
                                <select onChange={event => handleState("category", event.target.value)}>
                                    <option></option>
                                    <option>Book</option>
                                    <option>Cloth</option>
                                    <option>Shoe</option>
                                    <option>Other</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="space-2"></div>

                    <h1>Other</h1>
                    <div className="items-">
                        <div className="input-bar">
                            <small>SKU</small>
                            <div className="input">
                                <input type={"number"} placeholder="SKU" onChange={event => handleState("sku", event.target.value)} />
                            </div>
                        </div>
                        <div className="input-bar">
                            <small>Tags</small>
                            <div className="input">
                                <input type={"text"} placeholder="Tags (#)" onChange={event => handleState("tags", event.target.value.split(" "))} />
                            </div>
                        </div>
                        <div className="input-bar">
                            <small>Short Description</small>
                            <div className="input">
                                <textarea placeholder="Short Description" onChange={event => handleState("shortDescription", event.target.value)} />
                            </div>
                        </div>
                        <div className="input-bar">
                            <small>Stock status</small>
                            <div className="input">
                                <select onChange={event => handleState("stockStatus", event.target.value)}>
                                    <option></option>
                                    <option>In stock</option>
                                    <option>Out of stock</option>
                                    <option>Backother</option>
                                    <option>Other</option>
                                </select>
                            </div>
                        </div>
                        <div className="space-2"></div>
                        <div className="flex">
                            <div className="flex">
                                <input type={"checkbox"} onChange={event => handleState("soldIndividually", event.target.checked)} />
                                <div className="space-2"></div>
                                <small>Sold individually</small>
                            </div>

                            <div className="space-2"></div>

                            <div className="flex">
                                <input type={"checkbox"} onChange={event => handleState("published", event.target.checked)} />
                                <div className="space-2"></div>
                                <small>Published</small>
                            </div>
                        </div>
                        <div className="space-2"></div>
                        <div className={`${error === true ? "red" : "green"}`}>{msg}</div>
                        <div className="space-2"></div>
                        <ButtonLoader value={"Save"} loading={loading} onClick={() => saveNewProduct()} />
                        {/* <button onClick={() => saveNewProduct()}>Save</button> */}

                    </div>
                </section>
            </main>
        </div>


    </div>
}

export default AddProduct;