interface BookCardProps {
  title: string
  author: string
  image: string
}

const BookCard = ({ title, author, image }: BookCardProps) => {
  return (
    <div className="bg-white p-4 shadow rounded-lg hover:shadow-lg transition hover:-translate-y-1">

      <img
        src={image}
        alt={title}
        className="object-cover rounded mb-3"
      />

      <h3 className="font-semibold text-gray-800">
        {title}
      </h3>

      <p className="text-sm text-gray-500">
        {author}
      </p>

    </div>
  )
}

export default BookCard