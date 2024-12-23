import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

interface Props {
  yt: any;
  spotify: any;
  itunes: any;
}

const Dropdown: React.FC<Props> = ({ yt, spotify, itunes }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="max-w-24">
          Listen
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuGroup>
          <a href={itunes} className="cursor-pointer">
          <DropdownMenuItem>Apple Music</DropdownMenuItem>
          </a>
          <a href={yt} className="cursor-pointer">
          <DropdownMenuItem>YouTube Music</DropdownMenuItem>
          </a>
          <a href={spotify} className="cursor-pointer">
          <DropdownMenuItem>Spotify</DropdownMenuItem>
          </a>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Dropdown;