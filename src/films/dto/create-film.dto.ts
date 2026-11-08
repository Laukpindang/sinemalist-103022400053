import {
  IsString,
  IsNotEmpty,
  IsInt,
  Min,
  Max,
  IsNumber,
  IsBoolean,
  IsOptional,
} from 'class-validator';
import { Transform } from 'class-transformer';

export class CreateFilmDto {
  @IsString({ message: 'Judul harus berupa teks' })
  @IsNotEmpty({ message: 'Judul tidak boleh kosong' })
  judul!: string;

  @IsString({ message: 'Genre harus berupa teks' })
  @IsNotEmpty({ message: 'Genre tidak boleh kosong' })
  genre!: string;

  @IsInt({ message: 'Tahun harus berupa bilangan bulat' })
  @Min(1900, { message: 'Tahun minimal adalah 1900' })
  @Max(2030, { message: 'Tahun maksimal adalah 2030' })
  tahun!: number;

  @IsNumber({}, { message: 'Rating harus berupa angka' })
  @Min(0, { message: 'Rating minimal adalah 0' })
  @Max(10, { message: 'Rating maksimal adalah 10' })
  rating!: number;

  @IsOptional()
  @IsBoolean({ message: 'sudahDitonton harus bertipe boolean' })
  @Transform(({ value }) => {
    if (value === 'true') return true;
    if (value === 'false') return false;
    return value;
  })
  sudahDitonton?: boolean = false;
}
