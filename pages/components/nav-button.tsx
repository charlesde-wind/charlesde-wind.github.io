import Link from "next/link";
import React from "react";

type NavButtonProps = {
  url: string;
  name: string;
}

export default class NavButton extends React.Component<NavButtonProps> {
  render() {
    return (
      <>
        <Link className='rounded-full bg-slate-400' href={this.props.url}>
            {this.props.name}
        </Link>
      </>
    );
  }
}

// export default function NavButton({{url}:{url:string}, {name}:{name:string}}) {
//     return (
//         <button className='rounded-full bg-slate-400'>
//             <Link href={url}/>
//         </button>

//     )
// }
