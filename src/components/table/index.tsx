import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { cn } from '@/lib/utils'

type DataTableProps = {
  headers: string[]
  children: React.ReactNode
}

export const DataTable = ({ headers, children }: DataTableProps) => {
  return (
    <Table className="rounded-t-sm overflow-hidden">
      <TableHeader className=' bg-white'>
        <TableRow className="">
          {headers.map((header, key) => (
            <TableHead
              key={key}
              className={cn(
                key == headers.length - 1 && 'text-right',
                'text-black'
              )}
            >
              {header}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>{children}</TableBody>
    </Table>
  )
}
