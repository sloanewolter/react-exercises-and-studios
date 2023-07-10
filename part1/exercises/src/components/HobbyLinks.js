export default function hobbyLinks() {
    let hobbyLinks = ["https://www.missouribotanicalgarden.org/", "https://www.goodreads.com/"]
    return (
    <div>
    <h3>Links to a Few Hobby Resources</h3>
    <a href = {hobbyLinks[0]}>The Missouri Botanical Garden,  </a>
    <a href = {hobbyLinks[1]}>Good Reads</a> 
    </div>
    )
}