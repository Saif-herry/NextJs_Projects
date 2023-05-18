import { NextApiRequest, NextApiResponse } from "next";



const blogContent = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmxvZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      title: 'Mens Cotton Jacket',
      description:
        'great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.',
      author: 'Jhon Doe',
      date: '25 April 2021'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmxvZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      title: 'Mens Casual Slim Fit',
      description:
        'The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.',
      author: 'Lorin Salla',
      date: '2 January 2012'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmxvZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      title: "John Hardy Women's Legends",
      description:
        "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl.",
      author: 'Semon Haidmire',
      date: '13 May 2020'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmxvZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      title: 'Solid Gold Petite',
      description:
        'Satisfaction Guaranteed. Return or exchange any order within 30 days.',
      author: 'Lara Siamol',
      date: '11 March 2019'
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmxvZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      title: 'White Gold Plated Princess',
      description:
        'Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her.',
      author: 'Dellien Rocher',
      date: '21 June 2018'
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmxvZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      title: 'Pierced Owl Rose Gold',
      description: 'Rose Gold Plated Double Flared Tunnel Plug Earrings.',
      author: 'Kristen Henry',
      date: '29 July 2017'
    },
    {
      id: 7,
      image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmxvZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      title: 'WD 2TB Elements Portable',
      description:
        'USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity.',
      author: 'Sarona Thalia',
      date: '24 November 2016'
    },
    {
      id: 8,
      image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmxvZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      title: 'SanDisk SSD PLUS 1TB',
      description: 'Easy upgrade for faster boot up, shutdown.',
      author: 'Riki Pointine',
      date: '27 December 2020'
    }
  ];

export default function handler(req:NextApiRequest,res:NextApiResponse){
    if(req.method === "GET"){
        res.status(200).json(blogContent)
    }
    else{
        res.status(400).json({message:"Unsupported method"});
    }
}