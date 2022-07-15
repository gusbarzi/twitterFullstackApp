import { HeartIcon } from '@heroicons/react/outline'
import { useState } from 'react'

const MAX_TWEET_LENGTH = 250

function TweetForm() {
  const [text, setText] = useState('')

  function changeText(e) {
    setText(e.target.value)
  }

  return (
    <div className='border-b border-silver p-4 space-y-6'>
      <div className='flex space-x-5'>
        <img src="/src/assets/avatar.png" className='w-7' />
        <h1 className='font-bold text-xl'>Home</h1>
      </div>

      <form className='pl-12 text-lg flex flex-col'>
        <textarea
          className='bg-transparent outline-none disabled:opacity-50'
          name='text'
          value={text}
          placeholder="What's happening?"
          onChange={changeText}
        />

        <div className='flex justify-end items-center space-x-3'>
          <span className='text-sm'>
            <span>{text.length}</span> / <span className='text-birdBlue'>{MAX_TWEET_LENGTH}</span>
          </span>
          <button
            className='bg-birdBlue px-5 py-2 rounded-full disabled:opacity-50'
            disabled={text.length > MAX_TWEET_LENGTH}
          >
            Tweet
          </button>
        </div> 
      </form>
    </div>
  )
}

function Tweet({ name, username, avatar, children }) {
  return (
    <div className="flex space-x-3 p-4 border-b border-silver">
      <div>
        <img src={avatar} />
      </div>
      <div className='space-y-1'>
        <span className="font-bold text-sm">{name}</span>{' '}
        <span className="text-sm text-silver">@{username}</span>

        <p>
          {children}
        </p>
        <div className='flex space-x-1 text-silver text-sm items-center'>
          <HeartIcon className='w-5 stroke-1' />
          <span>1.2k</span>
        </div>

      </div>
    </div>
  )
}

export const App = () => {
  return (
    <>
      <TweetForm />
      <div>
        <Tweet name="Gustavo Barzi" username="gusbarzi" avatar="/src/assets/avatar.png">
          Let's make Twitter maximun fun!
        </Tweet>

        <Tweet name="Tainá Oliveira" username="taioliveira" avatar="/src/assets/avatar.png">
          Let's go dance!
        </Tweet>
      </div>
    </>
  )
} 