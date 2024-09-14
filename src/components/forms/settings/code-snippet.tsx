'use client'
import Section from '@/components/section-label'
import { useToast } from '@/hooks/use-toast'
import { Copy } from 'lucide-react'
import React from 'react'

type Props = {
  id: string
}

const CodeSnippet = ({ id }: Props) => {
  const { toast } = useToast()
  let snippet = `
    const iframe = document.createElement("iframe");
    
    const iframeStyles = (styleString) => {
    const style = document.createElement('style');
    style.textContent = styleString;
    document.head.append(style);
    }
    
    iframeStyles('.chat-frame {position: fixed;bottom: 50px;right: 50px;border: none;}')
    
    iframe.src = "http://localhost:3000/chatbot"
    iframe.classList.add('chat-frame')
    document.body.appendChild(iframe)
    
    window.addEventListener("message", (e) => {
        if(e.origin !== "http://localhost:3000") return null
        let dimensions = JSON.parse(e.data)
        iframe.width = dimensions.width
        iframe.height = dimensions.height
        iframe.contentWindow.postMessage("${id}", "http://localhost:3000/")
    })
        `

  return (
    <div className="mt-10 flex flex-col gap-5 items-start pr-20">
      <Section
        label="Code snippet"
        message="Copy and paste this code snippet into the header tag of your website"
      />
      <div className="bg-[#202020] w-full rounded-lg inline-block relative border-[1px] border-white/30">
        <Copy
          className="absolute top-4 right-5 text-white cursor-pointer"
          onClick={() => {
            navigator.clipboard.writeText(snippet)
            toast({
              title: 'Copied to clipboard',
              description: 'You can now paste the code inside your website',
              className: 'bg-[#202020] border-[1px] border-white/30 text-white',
            })
          }}
        />
        <pre>
          <code className="text-white/70">{snippet}</code>
        </pre>
      </div>
    </div>
  )
}

export default CodeSnippet
