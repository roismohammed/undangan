import { forwardRef, Fragment, useCallback, useEffect, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { cn } from '@/lib/utils'
import { IconCloudUpload, IconX } from '@tabler/icons-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

type FileInputProps = {
  className?: string
  variant?: 'simple' | 'dropzone'
  placeholder?: string
  onChange: (value: any) => void
  name: string
  value: string
}

type FileProps = {
  name: string
  preview: string
}[]

const FileInput = forwardRef<HTMLInputElement, FileInputProps>(
  function FileInput(props, ref) {
    const onDrop = useCallback((acceptedFiles: any) => {}, [])
    const [files, setFiles] = useState<FileProps>([])
    const { className, variant = 'simple', onChange } = props
    const { getRootProps, getInputProps, isDragActive, acceptedFiles } =
      useDropzone({
        onDrop: acceptedFiles => {
          setFiles(
            acceptedFiles.map((file: any) =>
              Object.assign(file, {
                preview: URL.createObjectURL(file),
              })
            )
          )
          onChange(acceptedFiles[0])
        },
      })

    useEffect(() => {
      if (props.value) {
        setFiles([
          {
            name: props.value,
            preview: props.value,
          },
        ])
      }
    }, [])

    useEffect(() => {
      return () => {
        files.forEach(file => URL.revokeObjectURL(file.preview))
      }
    }, [files])

    const thumbs = files.map(file => (
      <div key={file.name} className={'flex gap-2 mt-2 '}>
        <div
          className={
            'max-w-40 group max-h-40 rounded-md overflow-hidden relative'
          }
        >
          <img
            src={file.preview}
            className={
              'min-h-40 min-w-40 object-cover rounded-md border-2 p-2 border-slate-100 bg-slate-100/20'
            }
            onLoad={() => {
              URL.revokeObjectURL(file.preview)
            }}
            alt={file.name}
          />
          <Button
            type={'button'}
            onClick={() => {
              setFiles([])
            }}
            size={'sm'}
            className={
              'text-rose-500 bg-transparent h-6 w-6 shadow-none rounded-full absolute p-1 right-0 top-0 group-hover:bg-rose-600/80 group-hover:text-white hover:bg-rose-500 hover:text-white'
            }
          >
            <IconX size={18} />
          </Button>
        </div>
      </div>
    ))

    return (
      <Fragment>
        {variant == 'simple' ? (
          <Fragment>
            <div
              {...getRootProps()}
              className={cn(
                props.className,
                'min-h-32 bg-slate-50/80 border-primary/40 rounded-xl border flex items-center justify-center border-dashed'
              )}
            >
              <input {...getInputProps()} name={props.name} id={props.name} />
              {isDragActive ? (
                <p>Drop the files here ...</p>
              ) : (
                <Fragment>
                  <div className="grid gap-2 w-full text-center justify-center">
                    <div className="flex items-center justify-center">
                      <IconCloudUpload
                        size={48}
                        stroke={1.25}
                        className={'text-primary text-center'}
                      />
                    </div>
                    <h5 className={'font-semibold'}>
                      <span className={'text-primary'}>Pilih File</span> or Drag
                      File
                    </h5>
                  </div>
                </Fragment>
              )}
            </div>
            {thumbs}
          </Fragment>
        ) : (
          <Input type={'file'} placeholder={props.placeholder} />
        )}
      </Fragment>
    )
  }
)

export default FileInput
