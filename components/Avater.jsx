import Image from "next/head";

export const Avater = ({name, img}) => {
    const split = name.split("_");
    const fname = split[0];
    const lname = split[1];

    return <div className="avater">
        {name ? <div className="name">{fname?.charAt(0)}{lname?.charAt(0)}</div> : <Image src={item?.thumbnail} alt="" width={50} height={50}/>}
        {/* {name ? <div className="name">{fname?.charAt(0)}{lname?.charAt(0)}</div> : <img alt="" src={img}/>} */}
    </div>
}