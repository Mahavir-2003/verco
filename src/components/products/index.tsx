import React from 'react'
import TabsMenu from '../tabs/index'
import { SideSheet } from '../sheet'
import { Plus } from 'lucide-react'
import { CreateProductForm } from './product-form'
import { TabsContent } from '../ui/tabs'
import { DataTable } from '../table'
import { TableCell, TableRow } from '../ui/table'
import Image from 'next/image'
import { getMonthName } from '@/lib/utils'

type Props = {
  products: {
    id: string
    name: string
    price: number
    image: string
    createdAt: Date
    domainId: string | null
  }[]
  id: string
}

const ProductTable = ({ id, products }: Props) => {
  return (
    <div>
      <div>
        <h2 className="font-bold text-2xl">Products</h2>
        <p className="text-sm font-light">
          Add products to your store and set them live to accept payments from
          customers.
        </p>
      </div>
      <TabsMenu
        className="w-full flex justify-start mt-4 bg-[#252525] font-light px-1 border-[1px] border-white/40 rounded-md"
        triggers={[
          {
            label: 'All products',
          },
        ]}
        button={
          <div className="flex-1 flex justify-end text-white">
            <SideSheet
              description="Add products to your store and set them live to accept payments from customers."
              title="Add a product"
              className="flex items-center gap-2 px-4 py-2 text-white font-semibold rounded-lg text-sm "
              trigger={
                <>
                  <Plus
                    size={20}
                    className="text-white"
                  />
                  <p className="text-white">Add Product</p>
                </>
              }
            >
              <CreateProductForm id={id} />
            </SideSheet>
          </div>
        }
      >
        <TabsContent value="All products">
          <DataTable  headers={['Featured Image', 'Name', 'Pricing', 'Created']}>
            {products.map((product) => (
              <TableRow key={product.id}>
                <TableCell>
                  <Image
                    src={`https://ucarecdn.com/${product.image}/`}
                    width={50}
                    height={50}
                    alt="image"
                  />
                </TableCell>
                <TableCell>${product.name}</TableCell>
                <TableCell>{product.price}</TableCell>
                <TableCell className="text-right">
                  {product.createdAt.getDate()}{' '}
                  {getMonthName(product.createdAt.getMonth())}{' '}
                  {product.createdAt.getFullYear()}
                </TableCell>
              </TableRow>
            ))}
          </DataTable>
        </TabsContent>
      </TabsMenu>
    </div>
  )
}

export default ProductTable
